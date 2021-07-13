import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';

export class CustomEnvExtension {
  constructor(private react: ReactMain) {}

  static dependencies: any = [EnvsAspect, ReactAspect];

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const CustomEnvEnv = react.compose([
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 4);
            return config;
          },
        ],
      }),
    ]);

    envs.registerEnv(CustomEnvEnv);

    return new CustomEnvExtension(react);
  }
}
