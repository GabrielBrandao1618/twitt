export abstract class JwtService {
  abstract sign(payload: object): string;
  abstract verify(token: string): unknown;
}
