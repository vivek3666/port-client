export class Constants {
  public static VALIDATE_EMAIL = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
}

export class UrlConstants {

  public static moment = 'moment';
  public static momentBaseUrl = 'moments';
}

export class APIEndPoints {
  // public static endpoint = 'http://localhost:3000/api/';
  public static endpoint = 'https://moments-5d-server.herokuapp.com/api/';
}

export class SessionConstants {
  public static token = 'token';
}
