// utils/importImages.ts
export function importIcons(name: string): string {
    const images: { [key: string]: string } = {};
    const type = '.png';
    // 使用静态路径模式导入所有可能的文件
    const context = import.meta.glob('@/assets/icons/*.png', { eager: true });
  
    for (const key in context) {
      const fileName = key.split('/').pop()!;
      if (fileName.startsWith(name) && fileName.endsWith(type)) {
        images[fileName] = context[key].default;
      }
    }
  
    return images[name+type];
  }
  