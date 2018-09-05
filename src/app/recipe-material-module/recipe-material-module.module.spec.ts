import { RecipeMaterialModuleModule } from './recipe-material-module.module';

describe('RecipeMaterialModuleModule', () => {
  let recipeMaterialModuleModule: RecipeMaterialModuleModule;

  beforeEach(() => {
    recipeMaterialModuleModule = new RecipeMaterialModuleModule();
  });

  it('should create an instance', () => {
    expect(recipeMaterialModuleModule).toBeTruthy();
  });
});
