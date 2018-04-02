import * as chokidar from 'chokidar';

export function purgeCacheOnChange(path: string): void {
  const watcher = chokidar.watch(path);

  watcher.on('ready', () => {
    watcher.on('all', () => {
      console.log('Reloading server...');

      Object.keys(require.cache).forEach(id => {
        if (/[\/\\]src[\/\\]/.test(id)) {
          delete require.cache[id];
        }
      });
    });
  });
}
