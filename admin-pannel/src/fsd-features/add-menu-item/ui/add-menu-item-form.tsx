"use client";
import { AddImageSvg, Input, NumberInput } from "@/fsd-shared";
import React, { useEffect } from "react";
import { appendImage, useAddMenuItemForm } from "../model/form";
import { Controller } from "react-hook-form";
import { Select } from "@/fsd-shared/ui/select";
import { MenuItemImagesList } from "./menu-item-images-list";

function AddMenuItemForm() {
  const {
    formState: { errors },
    control,
  } = useAddMenuItemForm();

  useEffect(() => {
    window.addEventListener("drop", (e) => {
      e.preventDefault();
    });
    window.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <form
      className="w-full h-fit p-6 rounded-2xl grid grid-cols-6 gap-6 bg-white border border-stone-400"
      onSubmit={(e) => e.preventDefault()}
    >
      <Controller
        name="images"
        control={control}
        render={({ field: { value, onChange } }) => (
          <div className="col-span-6 flex gap-8">
            <label
              className="flex-2 h-full rounded-2xl flex flex-col justify-center items-center gap-3 border-2 border-dashed border-stone-400 text-lg font-medium text-stone-600 cursor-pointer"
              onDrop={(e) =>
                onChange(appendImage(value, e.dataTransfer.files, 6))
              }
            >
              <input
                value={""}
                multiple
                className="absolute -z-10"
                type="file"
                onChange={(e) =>
                  onChange(appendImage(value, e.target.files, 6))
                }
              />
              <span className="px-4 py-2 rounded-2xl flex items-center gap-2 bg-orange-400 text-xl font-medium text-white hover:bg-orange-500 active:scale-95 pointer-events-auto">
                Browse files <AddImageSvg className="w-8 h-8 **:fill-white" />
              </span>
              or drop up to 6 images here
              {errors.images && errors.images[0]?.message && (
                <span className="text-red-400">{errors.images[0].message}</span>
              )}
            </label>
            <MenuItemImagesList files={value} onChange={onChange} />
          </div>
        )}
      />
      <Controller
        name="name"
        control={control}
        render={({ field: { name, value, onChange } }) => (
          <Input
            errors={errors}
            value={value}
            name={name}
            label="Name"
            onChange={onChange}
            placeholder="Enter name"
            className="col-span-2"
          />
        )}
      />
      <Controller
        name="thumbnail"
        control={control}
        render={({ field: { name, value, onChange } }) => (
          <Input
            errors={errors}
            value={value}
            name={name}
            label="Short description"
            onChange={onChange}
            placeholder="Enter short description"
            className="col-span-4"
          />
        )}
      />
      <Controller
        name="category"
        control={control}
        render={({ field: { value, onChange } }) => (
          <label className="col-span-2 flex flex-col gap-2 text-lg text-stone-800">
            Category
            <Select
              currentValue={[value]}
              setValue={(val) => {
                onChange(val);
              }}
              options={[
                { name: "Category 1", id: 1 },
                { name: "Category 2", id: 2 },
              ]}
              placeholder="Select category"
            />
          </label>
        )}
      />
      <Controller
        name="tags"
        control={control}
        render={() => (
          <label className="col-span-2 flex flex-col gap-2 text-lg text-stone-800">
            Tags
            <Select
              currentValue={[]}
              setValue={() => {}}
              options={[]}
              placeholder="Select some tags"
            />
          </label>
        )}
      />
      <Controller
        name="price"
        control={control}
        render={({ field: { value, onChange } }) => (
          <label
            className="col-span-2 flex flex-col gap-2 text-lg text-stone-800"
            onClick={(e) => e.preventDefault()}
          >
            Price
            <NumberInput value={value} setValue={(value) => onChange(value)} />
          </label>
        )}
      />
      <button
        className="py-2 rounded-lg col-start-2 col-end-6 bg-orange-400 text-lg font-medium text-white"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}

export { AddMenuItemForm };
