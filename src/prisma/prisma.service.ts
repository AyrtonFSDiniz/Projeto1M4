import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  delete(arg0: { where: { id: number } }) {
    throw new Error('Method not implemented.');
  }
  update(arg0: {
    id: number;
    updateFilmeDtodata: {
      nome?: string;
      imagem?: string;
      data_lancamento?: string;
      tempo_duracao?: string;
    };
    where: { id: number };
  }):
    | import('.prisma/client').Filme
    | PromiseLike<import('.prisma/client').Filme> {
    throw new Error('Method not implemented.');
  }
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
