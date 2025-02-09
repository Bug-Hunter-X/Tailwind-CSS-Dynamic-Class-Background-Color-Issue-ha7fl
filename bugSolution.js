```javascript
import classNames from 'classnames';

//In your React component
const MyComponent = () => {
  const dynamicClass = someCondition ? 'bg-red-500' : 'bg-blue-500';
  return (
    <div className={classNames(dynamicClass)}>
      {/*Content*/}
    </div>
  );
};
```