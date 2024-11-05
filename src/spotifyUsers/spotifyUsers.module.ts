import { Module } from '@nestjs/common';
import { SpotifyUsersController } from './spotifyUsers.controller';
import { SpotifyUsersService } from './spotifyUsers.service';

@Module({
  controllers: [SpotifyUsersController],
  providers: [SpotifyUsersService]
})
export class SpotifyUsersModule {}
