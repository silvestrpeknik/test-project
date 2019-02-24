export interface Hello {
  message: string
}

export function hello(data: Hello|any): boolean {

  if(!data.hasOwnProperty('message')) {
    throw new Error('Does not contain message.')
  }

  if(!data.message) {
    return false;
  }

  if(data.message.trim().toLowerCase() === 'hello') {
    return true;
  }
  return false
}