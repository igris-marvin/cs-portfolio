
# react - dependencies

npm i axios@latest @stomp/stompjs@latest dayjs@latest
npm i bootstrap@latest bootstrap-icons@latest

App.tsx imports

```tsx
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
```

# image optimization

```ts
<img
    src={coverImageURL}
    className="card-img-top object-fit-cover"
    height="250px"
    alt={`${name} Image`}
    loading="lazy"
    decoding="async"
    fetchPriority="low"
    // crossOrigin="anonymous"
    referrerPolicy="no-referrer"
    draggable="false"
    style={{ containIntrinsicSize: "1200px auto" }}
/>

```

# node - dependencies

