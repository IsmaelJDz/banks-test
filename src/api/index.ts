function getBanks(): Promise<any> | null {
  const banksStorage = localStorage.getItem("banks");

  if (banksStorage) {
    return Promise.resolve(JSON.parse(banksStorage));
  }

  return null;
}

const getData = async (api: string) => {
  const response = await fetch(`${api}`);
  const banksData = await response.json();

  return banksData;
};

export { getBanks, getData };
