import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { UsersModule } from './users/users.module';
// import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    // 本地缓存
    CacheModule.register({
      ttl: 300,
      max: 100,
      isGlobal: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
