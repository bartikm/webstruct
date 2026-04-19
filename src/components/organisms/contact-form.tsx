"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormField } from "@/components/molecules/form-field";
import { Button } from "@/components/atoms/button";

const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki").max(50),
  email: z.string().email("Proszę podać poprawny adres e-mail"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków").max(500),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        alert("Wiadomość została wysłana pomyślnie!");
      } else {
        const result = await response.json();
        alert(result.message || "Wystąpił błąd podczas wysyłania wiadomości.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Nie udało się połączyć z serwerem. Spróbuj ponownie później.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-md">
      <FormField
        label="Imię i Nazwisko"
        id="name"
        placeholder="Wpisz swoje imię"
        {...register("name")}
        errorMsg={errors.name?.message}
      />
      
      <FormField
        label="E-mail"
        id="email"
        type="email"
        placeholder="Wpisz swój adres e-mail"
        {...register("email")}
        errorMsg={errors.email?.message}
      />

      <FormField
        label="Wiadomość"
        id="message"
        placeholder="W czym możemy pomóc?"
        {...register("message")}
        errorMsg={errors.message?.message}
      />

      <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
        {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
      </Button>
    </form>
  );
}
