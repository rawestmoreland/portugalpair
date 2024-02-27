"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function SubscribeSection() {
  const formSchema = z.object({
    email: z
      .string()
      .email("Must be a valid email address")
      .min(1, "Email address is required"),
    gdpr: z.boolean().refine((value) => value === true, {
      message: "You must agree to the terms.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      gdpr: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-4xl text-center mb-4 font-semibold tracking-wide">
        Lisbon Awaits
      </h1>
      <p className="text-center mb-8 text-xl sm:text-2xl">
        Discover Lisbon daily: Your go-to source for the city&apos;s latest
        events, hidden gems, and vibrant culture.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <div className="flex sm:flex-row flex-col items-center">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full">
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="sm:m-0 sm:rounded-r-none"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="hidden sm:flex sm:rounded-l-none bg-astronaut text-cumulus"
              type="submit"
            >
              Subscribe
            </Button>
          </div>
          <FormField
            control={form.control}
            name="gdpr"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md sm:justify-center justify-start">
                <FormControl>
                  <Checkbox
                    className="checked:bg-astronaut checked:text-cumulus"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-xs sm:text-sm font-normal">
                  I agree to receive email updates and promotions.
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-astronaut text-cumulus flex sm:hidden"
            type="submit"
          >
            Subscribe now
          </Button>
        </form>
      </Form>
    </div>
  );
}
