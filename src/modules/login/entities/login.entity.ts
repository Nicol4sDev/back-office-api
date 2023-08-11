import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Login extends Document {
    @Prop({
        unique: true,
        index: true,
    })
    id: string;

    @Prop({
        unique: true,
        index: true,
    })
    email: string;

    @Prop({
        unique: false,
    })
    password: string;
}

export const LoginSchema = SchemaFactory.createForClass(Login)