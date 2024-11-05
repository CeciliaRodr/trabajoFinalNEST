import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyUsersController } from './spotifyUsers.controller';

describe('SpotifyUsersController', () => {
  let controller: SpotifyUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotifyUsersController],
    }).compile();

    controller = module.get<SpotifyUsersController>(SpotifyUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
