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
    const sampleSnippets = [
      {
        code: `<span class="text-yellow-400">function</span> <span class="text-blue-400">initializeModelChunk</span>&lt;T&gt;(chunk: ResolvedModelChunk): T {
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
        code: `<span class="text-yellow-400">const</span> <span class="text-blue-400">fetchData</span> = <span class="text-yellow-400">async</span>() => {
  <span class="text-yellow-400">try</span> {
    <span class="text-yellow-400">const</span> response = <span class="text-yellow-400">await</span> fetch('https://api.example.com/data');
    <span class="text-yellow-400">const</span> data = <span class="text-yellow-400">await</span> response.json();
    <span class="text-yellow-400">return</span> data;
  } <span class="text-yellow-400">catch</span> (error) {
    console.error('Error fetching data:', error);
  }
}`,
        delay: 20,
        animationDuration: 25 + Math.random() * 10
      },
      {
        code: `<span class="text-blue-400">@Component</span>({
  selector: 'app-user-profile',
  template: \`
    <div class="user-card">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  \`
})
<span class="text-yellow-400">export class</span> <span class="text-green-400">UserProfileComponent</span> {
  user = { name: 'John Doe', email: 'john@example.com' };
}`,
        delay: 40,
        animationDuration: 25 + Math.random() * 10
      },
      {
        code: `<span class="text-yellow-400">function</span> <span class="text-blue-400">mergeSort</span>&lt;T&gt;(array: T[]): T[] {
  <span class="text-yellow-400">if</span> (array.length <= 1) {
    <span class="text-yellow-400">return</span> array;
  }
  
  <span class="text-yellow-400">const</span> middle = Math.floor(array.length / 2);
  <span class="text-yellow-400">const</span> left = array.slice(0, middle);
  <span class="text-yellow-400">const</span> right = array.slice(middle);
  
  <span class="text-yellow-400">return</span> merge(mergeSort(left), mergeSort(right));
}`,
        delay: 60,
        animationDuration: 25 + Math.random() * 10
      },
      {
        code: `<span class="text-yellow-400">import</span> React, { useState, useEffect } <span class="text-yellow-400">from</span> 'react';

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
};`,
        delay: 80,
        animationDuration: 25 + Math.random() * 10
      }
    ];
    
    // Create a collection with proper delays
    this.codeSnippets = [];
    
    // Add initial snippets with staggered delays
    for (let i = 0; i < sampleSnippets.length; i++) {
      this.codeSnippets.push({
        ...sampleSnippets[i],
        delay: i * 5, // 5 second delay between each snippet
        animationDuration: 25 + Math.random() * 10 // Randomize duration slightly
      });
    }
    
    // Add a few more with longer delays to ensure continuous flow
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * sampleSnippets.length);
      this.codeSnippets.push({
        ...sampleSnippets[randomIndex],
        delay: sampleSnippets.length * 5 + i * 5,
        animationDuration: 25 + Math.random() * 10
      });
    }
  }
}
