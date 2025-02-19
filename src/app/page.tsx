import { WeatherCard, WeatherSubCard } from "./components/weather";
import { Component } from "./components/weather-chart";

export default function Home() {
  return (
    <div className="grid gap-2">
      <section className="flex  flex-col gap-2 justify-center sm:items-stretch sm:flex-row ">
        <WeatherCard
          tipo={'cloudy'}
          condicion={'Nublado'}
          humedad={'45%'}
          viento={'5 km/h'}
        />
        <WeatherSubCard />
      </section>
        <section className="flex justify-center">
        <Component />

        </section>
    </div>
  );
}
