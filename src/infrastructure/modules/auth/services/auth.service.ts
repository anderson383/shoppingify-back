import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from '../dtos/auth.dto';
import { UserService } from './user.service';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userCredentials: AuthDto) {
    const { email, password } = userCredentials;
    try {
      const findUser = await this.userService.getByEmail(email);
      if (!findUser) {
        throw new Error('Usuario no encontrado');
      }

      const isValidPassword = await this.validateUserCredentials(
        password,
        findUser.password,
      );

      if (!isValidPassword) {
        throw new Error('Credenciales del usuario invalidas');
      }

      return this.getTokens({
        id: findUser.id,
        full_name: findUser.full_name,
        last_name: findUser.last_name,
        email: findUser.email,
      });
    } catch (err) {
      throw new UnauthorizedException('Credenciales del usuario invalidas');
    }
  }

  getUserRolesValidated(user: UserEntity) {
    return this.userService.getByEmail(user.email);
  }

  async validateUserCredentials(
    passwordCredential: string,
    passwordUser: string,
  ) {
    return await compare(passwordCredential, passwordUser);
  }

  async getTokens(user: any) {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(user, { expiresIn: '60m' }),
      this.jwtService.signAsync(user, { expiresIn: '7d' }),
    ]);

    return {
      access_token,
      refresh_token,
    };
  }
}
