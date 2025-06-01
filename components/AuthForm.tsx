"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,

} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import FormField from "./FormField";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });

type AuthProps = {
  type: string;
};

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),

    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({type}:{ type:FormType }) => {

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password:"",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {

    try{
        if(type === 'sign-up') {
            console.log('SIGN UP', values)
        } else {
            console.log("SIGN IN", values)
        }

    } catch (error) {
        console.log(error)
        toast.error('There was an error')

    }

  }

  const isSignin = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38}></Image>

          <h2 className="text-primary-100">EcoPrep</h2>
        </div>

        <h3>Practice Job Interviews with AI</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {!isSignin && <FormField control={form.control} name="name" label="Name" placeholder="Your name"/>}

            <p>Email</p>
            <p>Password</p>

            <Button className="btn" type="submit">
              {isSignin ? "Sign -in" : "Create an Account"}
            </Button>
          </form>

          <p className="text-center">
            {isSignin ? "No account yet?" : "Have an account already"}

            <Link
              href={!isSignin ? "/sign-in" : "/sign-up"}
              className="font-bold text-user-primary ml-1"
            >
              {!isSignin ? "Sign in" : "Sign up"}
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
