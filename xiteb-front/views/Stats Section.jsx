const stats = [
    { id: 1, name: 'Delivered packages', value: '890' },
    { id: 2, name: 'Countries covered', value: '137' },
    { id: 3, name: 'Tons of Goods', value: '740' },
    { id: 4, name: 'Satisfied Clients', value: '600' },
  ];
  
  export default function Stats_Section() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="text-base text-gray-600">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }
  