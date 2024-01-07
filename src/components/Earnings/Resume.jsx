export default function Resume() {
  return (
    <div className="flex flex-col p-6 w-80 gap-10">
      <h1>This month</h1>
      <div className="flex gap-10 justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">earnings</h3>
          2352€
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">works</h3>
          154
        </div>
      </div>

      <div className="flex gap-10 justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">new Clients</h3>2
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">test</h3>
          test
        </div>
      </div>
    </div>
  );
}
