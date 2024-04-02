/** @format */
'use client'
import React, { ChangeEvent, useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";

export default function Form() {
  const [initialUnit, setInitialUnit] = useState("0");
  const [unitsPumped, setUnitsPumped] = useState("0");
  const [error, setError] = useState<null | Error>(null);
  const [totalUnits, setTotalUnits] = useState("0");

  const [initialLitres, setInitialLiters] = useState('0');
  const [litresPumped, setLitresPumped] = useState('0');
  const [totalLitres, setTotalLitres] = useState('0');

  const [unitsSold, setUnitsSold] = useState('0');
  const [litresSold, setLitresSold] = useState('0');
  const [unitsDistributed, setUnitsDistributed] = useState('0');
  const [litresDistributed, setLitresDistributed] = useState('0');
  const [totalUnitsDistributed, setTotalUnitsDistributed] = useState('0');
  const [totalLitresDistributed, setTotalLitresDistributed] = useState('0');

  useEffect(() => {
    function handleTotal(initial, units) {
      let i = parseFloat(initial);
      let u = parseFloat(units);
      let total = i + u;
      setTotalUnits(String(total.toFixed(4)));
    }
    handleTotal(initialUnit, unitsPumped);
  }, [initialUnit, unitsPumped]);

  useEffect(() => {
    function handleTotalLitres(initial, units) {
      let i = parseFloat(initial);
      let u = parseFloat(units);
      let totalLitres = i + u;
      setTotalLitres(String(totalLitres.toFixed(4)));
    }
    handleTotalLitres(initialLitres, litresPumped);
  }, [initialLitres, litresPumped]);

  useEffect(() => {
    function handleTotalUnitsDistributed(initial, units) {
      let i = parseFloat(initial);
      let u = parseFloat(units);
      let total = i + u;
      setTotalUnitsDistributed(String(total.toFixed(4)));
    }
    handleTotalUnitsDistributed(unitsSold, unitsDistributed);
  }, [unitsSold, unitsDistributed])

  useEffect(() => {
    function handleTotalLitresDistributed(initial, units) {
      let i = parseFloat(initial);
      let u = parseFloat(units);
      let total = i + u;
      setTotalLitresDistributed(String(total.toFixed(4)));
    }
    handleTotalLitresDistributed(litresSold, litresDistributed);
  }, [litresSold, litresDistributed]);

  function handleInitialLitreChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    try {
      setInitialLiters(e.target.value)
    } catch (err) {
      setError(err as Error)
    }
  };

  function handleLitresPumpedChange(e: ChangeEvent<HTMLInputElement>): any {
    e.preventDefault();
    try {
      setLitresPumped(e.target.value)
    } catch (err) {
      setError(err as Error)
    }
  }


  function handleUnitsPumpedChange(e: ChangeEvent<HTMLInputElement>): any {
    e.preventDefault();
    try {
      setUnitsPumped(e.target.value)
    } catch (err) {
      setError(err as Error)
    }
  }

  function handleInitialChange(e: ChangeEvent<HTMLInputElement>): any {
    e.preventDefault();
    try {
      setInitialUnit(e.target.value)
    } catch (err) {
      setError(err as Error)
    }
  }

  function handleUnitsSold(e: ChangeEvent<HTMLInputElement>): any {
    e.preventDefault();
    try {
      setUnitsSold(e.target.value);
    } catch (err) {
      setError(err as Error);
    }
  }

  function handleLitresSold(e: ChangeEvent<HTMLInputElement>): any {
    e.preventDefault();
    try {
      setLitresSold(e.target.value);
    } catch(err) {
      setError(err as Error);
    }
  }

  function handleUnitsDistributed(e: ChangeEvent<HTMLInputElement>): any {
    e.preventDefault();
    try {
      setUnitsDistributed(e.target.value);
    } catch(err) {
      setError(err as Error);
    }
  }

  function handleLitreDistributed(e: ChangeEvent<HTMLInputElement>): any {
    e.preventDefault();
    try {
      setLitresDistributed(e.target.value);
    } catch(err) {
      setError(err as Error);
    }
  }
  function handleSubmit() {
    alert(`initial units ${initialUnit} | initial litres ${initialLitres}, units pumped ${parseFloat(unitsPumped)} | litres pumped ${litresPumped}`)
  }
  // console.log(total);
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-24 mt-4 p-4 border rounded border-gray-500 min-h-screen">
        
        <div className="mb-4">
          <h1 className="font-bold">Enter your usage</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 my-2 mx-8 p-2 gap-4 md:gap-6 border rounded-lg bg-cyan-100/75 shadow-md  md:border-hidden ">
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold" >Initial Units</label>
            </div>
            <div className="col-span-3 p-2 rounded">
              <input
                className="p-2 w-full border focus:outline-none focus:decoration-0 focus-visible:ring-2 focus:ring ring-cyan-400 rounded text-emphasis "
                placeholder="Enter initial unit reading"
                type="float"
                onChange={handleInitialChange}
              />
            </div>
          </div>
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold" >Initial Litres</label>
            </div>
            <div className="col-span-3 p-2">
              <input
                className="p-2 w-full border focus:outline-none focus:decoration-0 focus-visible:ring-2 focus:ring ring-cyan-400 rounded text-emphasis "
                placeholder="Enter initial water reading"
                type="number"
                onChange={handleInitialLitreChange}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 my-2 mx-8 p-2 gap-4 md:gap-6 border rounded-lg bg-cyan-100/75 shadow-md  md:border-hidden ">
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold">Units Pumped</label>
            </div>
            <div className="col-span-3 p-2 rounded">
              <input
                type="number"
                className="w-full p-2 rounded border focus:outline-none focus-visible:ring focus:ring ring-cyan-400"
                placeholder="Enter units used"
                onChange={handleUnitsPumpedChange}
              />
            </div>
          </div>
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold">Litres Pumped</label>
            </div>
            <div className="col-span-3 p-2 rounded">
              <input
                type="number"
                className="w-full p-2 rounded border focus:outline-none focus-visible:ring focus:ring ring-cyan-400"
                placeholder="Amount in litres"
                onChange={handleLitresPumpedChange}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 my-2 mx-8 p-2 gap-4 md:gap-6 border rounded-lg shadow-md  md:border-hidden ">
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold">Total Units</label>
            </div>
            <div className="col-span-3 p-2 rounded">
              <p
                className="w-full p-2 rounded border focus:outline-none focus-visible:ring focus:ring bg-cyan-100 me-8"
              >{totalUnits}</p>
            </div>
          </div>
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold">Total Litres</label>
            </div>
            <div className="col-span-3 p-2 rounded">
              <p
                className="w-full p-2 rounded border focus:outline-none focus-visible:ring focus:ring bg-cyan-100 me-8"
              >{totalLitres}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 my-2 mx-8 p-2 gap-4 md:gap-6 border rounded-lg bg-cyan-100/75 shadow-md  md:border-hidden ">
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold" >Units Sold</label>
            </div>
            <div className="col-span-3 p-2 rounded">
              <input
                className="p-2 w-full border focus:outline-none focus:decoration-0 focus-visible:ring-2 focus:ring ring-cyan-400 rounded text-emphasis "
                placeholder="Enter initial unit reading"
                type="number"
                onChange={handleUnitsSold}
              />
            </div>
          </div>
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold" >Litres Sold</label>
            </div>
            <div className="col-span-3 p-2">
              <input
                className="p-2 w-full border focus:outline-none focus:decoration-0 focus-visible:ring-2 focus:ring ring-cyan-400 rounded text-emphasis "
                placeholder="Enter initial water reading"
                type="number"
                onChange={handleLitresSold}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 my-2 mx-8 p-2 gap-4 md:gap-6 border rounded-lg bg-cyan-100/75 shadow-md  md:border-hidden ">
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold" >Units Distributed</label>
            </div>
            <div className="col-span-3 p-2 rounded">
              <input
                className="p-2 w-full border focus:outline-none focus:decoration-0 focus-visible:ring-2 focus:ring ring-cyan-400 rounded text-emphasis "
                placeholder="Enter initial unit reading"
                type="number"
                onChange={handleUnitsDistributed}
              />
            </div>
          </div>
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold" >Litres Distributed</label>
            </div>
            <div className="col-span-3 p-2">
              <input
                className="p-2 w-full border focus:outline-none focus:decoration-0 focus-visible:ring-2 focus:ring ring-cyan-400 rounded text-emphasis "
                placeholder="Enter initial water reading"
                type="number"
                onChange={handleLitreDistributed}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 my-2 mx-8 p-2 gap-4 md:gap-6 border rounded-lg shadow-md  md:border-hidden ">
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold">Total Units Distributed</label>
            </div>
            <div className="col-span-3 p-2 rounded">
              <p
                className="w-full p-2 rounded border focus:outline-none focus-visible:ring focus:ring bg-cyan-100 me-8"
              >{totalUnitsDistributed}</p>
            </div>
          </div>
          <div className="col-span-2 md:flex md:flex-col">
            <div className=" grid md:justify-items-start">
              <label className="font-semibold">Total Litres Distributed</label>
            </div>
            <div className="col-span-3 p-2 rounded">
              <p
                className="w-full p-2 rounded border focus:outline-none focus-visible:ring focus:ring bg-cyan-100 me-8"
              >{totalLitresDistributed}</p>
            </div>
          </div>
        </div>
        <Button variant="success" size="lg">Submit</Button>
      </form>
    </>
  );
}
