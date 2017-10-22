function a() {
  console.log('A!');
  return function() {
    console.log('B!');
  };
}
c = a();
c();
