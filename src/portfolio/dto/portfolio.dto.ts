export class CreatePortfolioDto {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  hobby?: string;
}

export class CreateProjectDto {
  projectName: string;
  institutionName: string;
  userId: number;
}
