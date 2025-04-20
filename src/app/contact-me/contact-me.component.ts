import { Component } from '@angular/core';
import { CodeEditor } from '@acrodata/code-editor';
import { FormsModule } from '@angular/forms';
import { LanguageSupport, LanguageDescription, StreamParser, StreamLanguage } from "@codemirror/language"

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, CodeEditor],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  user = {
    name: "",
    email: "",
    message: "",
    date: new Date().toLocaleString()
  };

  constructor() {
    setInterval(() => {
      this.user.date = new Date().toLocaleString();
    }, 1000);
  }

  get value() {
    return `
  const button = document.querySelector('#sendBtn');

  const message = {
    name: "${this.user.name}",
    email: "${this.user.email}",
    message: \`${this.user.message}\`,
    date: "${this.user.date}"
  };

  button.addEventListener('click', () => {
	  form.send(message);
  });

  // I will send you a message as soon as possible.
  // Florent.
  `;
  }

  set value(val: string) {
  }

  languages = [
    LanguageDescription.of({
      name: "JavaScript",
      alias: ["ecmascript", "js", "node"],
      extensions: ["js", "mjs", "cjs"],
      async load() {
        const m = await import("@codemirror/lang-javascript");
        return m.javascript();
      }
    })
  ]
}
