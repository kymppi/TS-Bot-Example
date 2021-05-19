import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import { Bot } from './bot';
import { Client } from 'discord.js';

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());

if (!process.env.TOKEN) {
  console.log('Please give me a token in process.env.TOKEN');
  process.exit(1);
}

container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);

export default container;
