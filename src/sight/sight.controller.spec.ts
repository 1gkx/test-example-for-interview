import { Test, TestingModule } from '@nestjs/testing';
import { SightController } from './sight.controller';

describe('SightController', () => {
  let controller: SightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SightController],
    }).compile();

    controller = module.get<SightController>(SightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
