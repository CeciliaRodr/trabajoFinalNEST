import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyUsersService } from './spotifyUsers.service';

describe('SpotifyUsersService', () => {
  let service: SpotifyUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpotifyUsersService],
    }).compile();

    service = module.get<SpotifyUsersService>(SpotifyUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
