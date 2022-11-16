class HttpException extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    // this.message = message;
    this.status = status;
  }
}
 
export default HttpException;