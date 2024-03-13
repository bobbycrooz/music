"use client";

// import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectForm } from "./ui/select";

import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
// import * as React from "react";

// import { formatPhone } from "@/lib/utils";
// import { Card } from "./ui/card";
import { Flex } from "./Flex";
import { Button } from "./ui/button";

const ConnectionDetailsSchema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      name: yup.string().required("Name is required"),
      phone_number: yup.string().required("Phone is required"),
      address: yup.string().required("Address is required"),
      reason: yup.string().required("Reason is required"),
      company: yup.string().required("Company name is required"),
      category: yup.string().required("Category name is required"),
      due_date: yup.string().required("Due date is required"),
      quanity: yup.string().required("Quantity is required"),
      unit_price: yup.string().required("Unit price is required"),
      amount: yup.string().required("Amount is required"),
      vat_amount: yup.string(),
      grand_total: yup.string().required("Ground total is required"),
      description: yup.string().required("Description is required"),
});

export default function CreatePOForm()
{
      // const [first, setfirst] = React.useState(0)

      const defaultValues = {
            email: "",
            name: "",
            phone_number: "",
            address: "",
            reason: "",
            company: "",
            category: "",
            due_date: "",
            quanity: "",
            unit_price: "",
            amount: "",
            vat_amount: "",
            grand_total: "",
            description: "",
      };

      const form = useForm({
            resolver: yupResolver(ConnectionDetailsSchema),
            defaultValues,
            mode: "all",
      });
      /*
       *
       *
       *
       *
       */
      async function onSubmit(values)
      {
            console.log(values);
      }
      /*
       *
       *
       *
       *
       */
      return (
            <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-4 h-auto flex flex-col py-10 gap-6">
                        {/**company select */}
                        <div className="company w-1/2">
                              <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                          <FormItem id="company" className="w-[328px]">
                                                <FormLabel htmlFor="state">
                                                      Company <span className="text-red-400 font-medium -ml-1">*</span>
                                                </FormLabel>

                                                <FormControl>
                                                      <SelectForm
                                                            // id="deliveryType"
                                                            onChange={field.onChange}
                                                            value={field.value}
                                                            placeholder={"Select company"}
                                                            options={comapanies}
                                                      />
                                                </FormControl>

                                                <FormMessage />
                                          </FormItem>
                                    )}
                              />
                        </div>

                        <Flex.col className="company space-y-6">
                              <Flex className="border-b py-2">
                                    <p className="capitalize font-bold text-xl mt-4 text-gray-600">item description</p>
                              </Flex>

                              <div className="grid w-[60%] grid-cols-2 gap-4">
                                    <FormField
                                          control={form.control}
                                          name="category"
                                          render={({ field }) => (
                                                <FormItem id="category" className="">
                                                      <FormLabel htmlFor="state">
                                                            category <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>

                                                      <FormControl>
                                                            <SelectForm
                                                                  // id="deliveryType"
                                                                  onChange={field.onChange}
                                                                  value={field.value}
                                                                  placeholder={"Select category"}
                                                                  options={comapanies}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="due_date"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="due_date">
                                                            Due Date <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  className=""
                                                                  type="date"
                                                                  id="due_date"
                                                                  placeholder="date needed"
                                                                  {...field}
                                                                  error={form.formState.errors?.due_date?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="quanity"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="api_key">
                                                            quantity <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="text"
                                                                  id="quanity"
                                                                  placeholder="quanity"
                                                                  {...field}
                                                                  error={form.formState.errors?.quanity?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="unit_price"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="unit_price">
                                                            unit price <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="number"
                                                                  id="unit_price"
                                                                  placeholder="price / unit"
                                                                  {...field}
                                                                  error={form.formState.errors?.unit_price?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="amount"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="amount">Amount</FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="number"
                                                                  id="amount"
                                                                  placeholder="Enter amount"
                                                                  {...field}
                                                            // error={form.formState.errors?.vat_amount?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="vat_amount"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="vat_amount">Amount (VAT)</FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="number"
                                                                  id="vat_amount"
                                                                  placeholder="enter VAT"
                                                                  {...field}
                                                                  error={form.formState.errors?.vat_amount?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="grand_total"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="grand_total">
                                                            Grand total <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="number"
                                                                  id="grand_total"
                                                                  placeholder="Enter grand total"
                                                                  {...field}
                                                            // error={form.formState.errors?.grand_total?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <div className="col-span-2">
                                          <FormField
                                                control={form.control}
                                                name="description"
                                                render={({ field }) => (
                                                      <FormItem className="">
                                                            <FormLabel htmlFor="description" className="text-primary-black font-medium text-[15px]">
                                                                  Description
                                                            </FormLabel>

                                                            <FormControl>
                                                                  <Textarea
                                                                        placeholder="Let your customer know what this invoice is for"
                                                                        className="resize-none w-full"
                                                                        id="description"
                                                                        // error={form.formState.errors.subject?.message}
                                                                        {...field}
                                                                  />
                                                            </FormControl>
                                                            <FormMessage />
                                                      </FormItem>
                                                )}
                                          />
                                    </div>
                              </div>
                        </Flex.col>

                        {/*supplier details */}
                        <Flex.col className="company space-y-6">
                              <Flex className="border-b py-2">
                                    <p className="capitalize font-bold text-xl text-gray-600 mt-4">Supplier / vendor details</p>
                              </Flex>

                              <div className="grid w-[60%] grid-cols-2 gap-4">
                                    <FormField
                                          control={form.control}
                                          name="name"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="name">Name</FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="text"
                                                                  id="name"
                                                                  placeholder="Enter name"
                                                                  {...field}
                                                                  error={form.formState.errors?.name?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="address"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="address">Address</FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="text"
                                                                  id="address"
                                                                  placeholder="Enter Address"
                                                                  {...field}
                                                                  error={form.formState.errors?.address?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="email"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="api_key">Email</FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="email"
                                                                  id="email"
                                                                  placeholder="Email"
                                                                  {...field}
                                                                  error={form.formState.errors?.email?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="phone_number"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="phone_number">Phone</FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="phone"
                                                                  id="phone_number"
                                                                  placeholder="Enter Phone"
                                                                  {...field}
                                                                  error={form.formState.errors?.phone_number?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <div className="col-span-2">
                                          <FormField
                                                control={form.control}
                                                name="reason"
                                                render={({ field }) => (
                                                      <FormItem className="">
                                                            <FormLabel htmlFor="reason" className="text-primary-black font-medium text-[15px]">
                                                                  Reason
                                                            </FormLabel>

                                                            <FormControl>
                                                                  <Textarea
                                                                        placeholder="Reason for payment order"
                                                                        className="resize-none w-full"
                                                                        id="reason"
                                                                        error={form.formState.errors.reason?.message}
                                                                        {...field}
                                                                  />
                                                            </FormControl>
                                                            <FormMessage />
                                                      </FormItem>
                                                )}
                                          />
                                    </div>
                              </div>

                              <Flex className="w-1/2">
                                    <Button>Create PO</Button>
                              </Flex>
                        </Flex.col>
                  </form>
            </Form>
      );
}

const comapanies = [
      {
            label: "Wayapay",
            value: "wayapay",
      },
      {
            label: "WayaBank",
            value: "wayabank",
      },
];

// Subject <span className="text-gray-300 font-medium">(Optional)</span>

// <FormField
// control={form.control}
// name="accountNumber"
// render={({ field }) => (
//       <FormItem>
//             {/* <FormLabel htmlFor="secret_key">API Key</FormLabel> */}
//             <FormControl>
//                   <Input
//                         id="accountNumber"
//                         placeholder="Account Number"
//                         {...field}
//                         error={form.formState.errors?.accountNumber?.message}
//                   />
//             </FormControl>

//             <FormMessage />
//       </FormItem>
// )}
// />

// <FormField
// control={form.control}
// name="phone"
// render={({ field }) => (
//       <FormItem>
//             <FormControl>
//                   <Input
//                         id="phoneNumber"
//                         placeholder="Phone Number"
//                         {...field}
//                         error={form.formState.errors?.phone?.message}
//                   />
//             </FormControl>
//             <FormMessage />
//       </FormItem>
// )}
// />
