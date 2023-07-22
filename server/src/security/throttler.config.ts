import { ThrottlerModuleOptions } from '@nestjs/throttler';

const throttlerConfig: ThrottlerModuleOptions = {
  ttl: 60,
  limit: 50,
};

export default throttlerConfig;