import * as assert from 'assert';
import { promises as fs } from  'fs';


describe('仕様:プロジェクトの名前変更のテスト', () => {
    it('① プロジェクトのルートの package.json に name: "@mogwai/c-comment-lint" があること', async () => {
      const root_json = JSON.parse(await fs.readFile("package.json", "utf-8"));
      assert.equal(root_json['name'], '@mogwai/c-comment-lint');
    });

    it('② client/package.json に name: "@mogwai/c-comment-lint-client" があること', async () => {
      const root_json = JSON.parse(await fs.readFile("client/package.json", "utf-8"));
      assert.equal(root_json['name'], '@mogwai/c-comment-lint-client');
    });

    it('③ server/package.json に name: "@mogwai/c-comment-lint-server" があること', async () => {
      const root_json = JSON.parse(await fs.readFile("server/package.json", "utf-8"));
      assert.equal(root_json['name'], '@mogwai/c-comment-lint-server');
    });

    it('④ プロジェクトのルートの package.json に publisher: "mogwai" があること', async () => {
      const root_json = JSON.parse(await fs.readFile("package.json", "utf-8"));
      assert.equal(root_json['publisher'], 'mogwai');
    });

});
