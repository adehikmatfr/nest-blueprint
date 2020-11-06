import { Module } from '@nestjs/common';
import { RabbitmqLibraryService } from './rabbitmq-library.service';

@Module({
  providers: [RabbitmqLibraryService],
  exports: [RabbitmqLibraryService],
})
export class RabbitmqLibraryModule {}
