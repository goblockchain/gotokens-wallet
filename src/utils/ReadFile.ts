export async function readFileAsync(file: File): Promise<string> {
  if (!file) return;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // @ts-ignore
      const arrayBuffer = new Uint8Array(reader.result);
      // @ts-ignore
      resolve(arrayBuffer);
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}
