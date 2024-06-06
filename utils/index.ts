// 导入 icons 目录下的所有 png 文件
export function importIcons() {
    const images: { [key: string]: string } = {};
    // 使用静态路径模式导入所有可能的文件
    const context = import.meta.glob("@/assets/icons/*.png", { eager: true });
  
    for (const key in context) {
      const fileName = key.split('/').pop()!;
      if (fileName.endsWith(".png")) {
        images[fileName] = context[key].default;
      }
    }
  
    return images;
  }
  