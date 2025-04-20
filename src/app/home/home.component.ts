import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CodeSnippet {
  code: string;
  delay: number;
  animationDuration: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  codeSnippets: CodeSnippet[] = [];

  ngOnInit() {
    this.initializeCodeSnippets();
  }

  initializeCodeSnippets() {
    const sampleSnippets: CodeSnippet[] = [
      {
        code:
          `
<span class="text-yellow-400">function</span> <span class="text-blue-400">initializeModelChunk</span>&lt;T&gt;(chunk: ResolvedModelChunk): T {
  <span class="text-yellow-400">const</span> value: T = <span class="text-purple-400">parseModel</span>(chunk._response, chunk._value);
  <span class="text-yellow-400">const</span> initializedChunk: InitializedChunk&lt;T&gt; = {chunk: any};
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  <span class="text-yellow-400">return</span> value;
}`,
        delay: 0,
        animationDuration: 25 + Math.random() * 10
      },
      {
        code: `
<span class="text-yellow-400">const</span> <span class="text-blue-400">fetchData</span> = <span class="text-yellow-400">async</span>() => {
  <span class="text-yellow-400">try</span> {
    <span class="text-yellow-400">const</span> response = <span class="text-yellow-400">await</span> fetch('https://api.example.com/data');
    <span class="text-yellow-400">const</span> data = <span class="text-yellow-400">await</span> response.json();
    <span class="text-yellow-400">return</span> data;
  } <span class="text-yellow-400">catch</span> (error) {
    console.error('Error fetching data:', error);
  } 
}`,
        delay: 2,
        animationDuration: 25 + Math.random() * 10
      },

      {
        code: `
<span class="text-yellow-400">function</span> <span class="text-blue-400">mergeSort</span>&lt;T&gt;(array: T[]): T[] {
  <span class="text-yellow-400">if</span> (array.length <= 1) {
    <span class="text-yellow-400">return</span> array;
  }
  
  <span class="text-yellow-400">const</span> middle = Math.floor(array.length / 2);
  <span class="text-yellow-400">const</span> left = array.slice(0, middle);
  <span class="text-yellow-400">const</span> right = array.slice(middle);
  
  <span class="text-yellow-400">return</span> merge(mergeSort(left), mergeSort(right));
}
        `,
        delay: 6,
        animationDuration: 25 + Math.random() * 10
      },
      {
        code: `
<span class="text-yellow-400">import</span> React, { useState, useEffect } <span class="text-yellow-400">from</span> 'react';

<span class="text-yellow-400">const</span> <span class="text-blue-400">Counter</span> = () => {
  <span class="text-yellow-400">const</span> [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  <span class="text-yellow-400">return</span> (
    &lt;button onClick={() => setCount(count + 1)}&gt;
      Clicked {count} times
    &lt;/button&gt;
  );
};
        `,
        delay: 8,
        animationDuration: 25 + Math.random() * 10
      }
    ];

    const animationDuration = 20; 
    const snippetSpacing = 12;

    this.codeSnippets = [];
    for (let i = 0; i < sampleSnippets.length; i++) {
      this.codeSnippets.push({
        ...sampleSnippets[i],
        delay: i * snippetSpacing,
        animationDuration
      });
    }
  }
}
