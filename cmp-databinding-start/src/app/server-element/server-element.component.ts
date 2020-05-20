import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
  , AfterViewInit, AfterViewChecked, OnDestroy {
  // a decorator: parent component- binding outside
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true, read: ElementRef}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true, read: ElementRef}) contentParagraph: ElementRef;

  constructor() { 
    console.log('constructor called');
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterContentInit() {
    console.log('Text Content: ' + this.contentParagraph.nativeElement.textContent);
    console.log('ngAfterContentInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('HEADER: '+ this.header.nativeElement.textContent);
    console.log('Text Content: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit() {
    console.log('HEADER: '+this.header.nativeElement.textContent);
    console.log('ngAfterViewInit called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
