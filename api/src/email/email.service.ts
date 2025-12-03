import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';
import { renderFile } from 'pug';
import * as crypto from 'crypto';

@Injectable()
export class EmailService {
  constructor(
    @Inject(MailerService) private readonly mailerService: MailerService,
  ) {}
  sendEmail(to: string, mail: string) {
    this.mailerService.sendMail({
      to,
      html: mail,
    });
  }
}
