import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserFormatter } from 'src/formatter/user.formatter';
import { RegisterUserRequest } from 'src/interface/apiRequest';
import { UserResponse } from 'src/interface/apiResponse';
import { UserService } from 'src/service/user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userFormatter: UserFormatter,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  public async register(
    @Body() body: RegisterUserRequest,
  ): Promise<UserResponse> {
    const user = await this.userService.addUser(body);
    return this.userFormatter.toUserResponse(user);
  }

  @Get('all')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: [UserResponse] })
  public async list(): Promise<Array<UserResponse>> {
    const users = await this.userService.listUsers();
    return users.map(this.userFormatter.toUserResponse);
  }
}
