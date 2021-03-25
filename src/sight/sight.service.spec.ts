import { Test, TestingModule } from '@nestjs/testing';
import { SightService } from './sight.service';

describe('SightService', () => {
  let service: SightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SightService],
    }).compile();

    service = module.get<SightService>(SightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
