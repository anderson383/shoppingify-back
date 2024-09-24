import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../services/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { SECRET_KEYJWT } from 'src/infrastructure/config/constants/jwt';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEYJWT,
    });
  }

  async validate(userPayload: UserEntity) {
    console.log(userPayload, 'payload');
    const user = await this.authService.getUserRolesValidated(userPayload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return {
      id: user.id,
      full_name: user.full_name,
      last_name: user.last_name,
      email: user.email,
    };
  }
}
