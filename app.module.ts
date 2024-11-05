import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyUsersModule } from './spotifyUsers/spotifyUsers.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [SpotifyUsersModule, SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
