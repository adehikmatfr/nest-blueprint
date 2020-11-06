import { Test, TestingModule } from '@nestjs/testing';
import { RabbitmqLibraryService } from './rabbitmq-library.service';

describe('RabbitmqLibraryService', () => {
  let service: RabbitmqLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RabbitmqLibraryService],
    }).compile();

    service = module.get<RabbitmqLibraryService>(RabbitmqLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
