import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 pt-[170px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">Entre em Contato</h1>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 text-white p-8 rounded-lg">
          <div className="bg-[#ffffff18] p-8 rounded-lg shadow-md">
            <h2 className="text-2xl mb-6 text-foreground">
              Informações de Contato
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-card text-primary-foreground rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-foreground">Telefone / WhatsApp</h3>
                  <a
                    href="https://wa.me/5517996262224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    (17) 99626-2224
                  </a>
                  <p className="text-sm text-foreground mt-1">
                    Atendimento via WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-card text-foreground rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1">E-mail</h3>
                  <a href="mailto:" className="hover:underline">
                    contato@axeumbanda.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-card text-primary-foreground rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1">Endereço</h3>
                  <a
                    href="https://www.google.com/maps?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Rua dos Orixás, 777
                    <br />
                    Vila Sagrada - São Paulo/SP
                    <br />
                    CEP: 01234-567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-card text-primary-foreground rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1">Horário de Atendimento</h3>
                  <p className="text-foreground">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Sábado: 9h às 14h
                    <br />
                    Domingo e Feriados: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
