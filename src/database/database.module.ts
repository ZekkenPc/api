//Aun no esta implementada la conexión a la base de datos en turso

import { createClient } from '@libsql/client';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/libsql';

export const DATABASE_CONNECTION = 'database-connection'
@Module({
    providers: [
        {
            provide: DATABASE_CONNECTION,
            useFactory: (configService: ConfigService) => {
                const client = createClient({
                    url: configService.getOrThrow('DATABASE_URL'),
                    authToken: configService.getOrThrow('DATABASE_TOKEN'),
                });

                return drizzle(client, {
                    schema: {
                    },
                });
            },
            inject: [ConfigService],
        },
    ],
    exports: [DATABASE_CONNECTION]
})
export class DatabaseModule {}