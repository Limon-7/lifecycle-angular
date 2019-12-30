# Basicapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## ViewChild():

Property decorator that configures a view query. The change detector looks for the first element or the directive matching the selector in the view DOM. If the view DOM changes, and a new child matches the selector, the property is updated.

### Constructor viewchild undefined that is because by the time the constructor is called we haven’t render the children yet.

### Note: If we interact with viewchild references in our component we need to do that in the ngAfterViewInit function.

We can use it when only child component.

## ViewChildren():

Parameter decorator that configures a view query.
When we have multiple child components to use ViewChildren along with generic QueryList instead of using viewchild.
@ViewChildren(ComponentName) viewChildren:QueryList<ComponentName>

### Note

We use the ViewChildren decorator which matches all joke’s components and stores them in a QuerList called viewChildren.
We can convert our querylist joke components into an array by calling toArray().

## ContentChild():

The concept of a content child is similar to that of a view child but the content children of the given component are the child elements that are projected into the component from the host component.
In our example application we are projecting one joke in from the host ChildrenHomeComponent.

### Note:
