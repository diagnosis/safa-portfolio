import ContactForm from "@/components/ui/ContactForm";
import {Suspense} from "react";

export default function ContactPage() {
    return (
        <Suspense fallback={<div />}>
            <ContactForm />
        </Suspense>
    );
}