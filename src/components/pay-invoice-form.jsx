"use client";

// import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectForm } from "./ui/select";
import { Download } from "lucide-react";

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
      inv_number: yup.string().required("PO number is required"),
      po_number: yup.string().required("PO number is required"),
      category: yup.string().required("Category name is required"),
      amount_paid: yup.string().required("Amount is required"),
      ref: yup.string(),
      description: yup.string().required("Description is required"),
      // payment details
      gl_debit_account: yup.string().required("Category name is required"),
      gl_debit_desc: yup.string().required("Due date is required"),
      gl_credit_account: yup.string().required("Category name is required"),
      gl_credit_desc: yup.string().required("Due date is required"),
      // bank
      debit_bank_name: yup.string().required("Quantity is required"),
      debit_bank_account: yup.string().required("Quantity is required"),
      debit_bank_account_name: yup.string().required("Quantity is required"),
      credit_bank_name: yup.string().required("Quantity is required"),
      credit_bank_account: yup.string().required("Quantity is required"),
      credit_bank_account_name: yup.string().required("Quantity is required"),

});

export default function PayInvocieForm()
{
      // const [first, setfirst] = React.useState(0)

      const defaultValues = {

            email: "",
            name: "",
            phone_number: "",
            address: "",
            reason: "",
            inv_number: "inv_1234AB",
            category: "",
            due_date: "",
            quanity: "",
            unit_price: "",
            amount: "",
            vat_amount: "",
            grand_total: "",
            description: "",
            gl_debit_account: "",
            gl_debit_desc: "",
            gl_credit_account: "",
            gl_credit_desc: "",
            // bank
            debit_bank_name: "",
            debit_bank_account: "",
            debit_bank_account_name: "",
            credit_bank_name: "",
            credit_bank_account: "",
            credit_bank_account_name: "",
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
                        <div className="company w-1/2 flex gap-4">
                              <FormField
                                    control={form.control}
                                    name="inv_number"
                                    render={({ field }) => (
                                          <FormItem className="w-[330px] relative">
                                                <FormLabel htmlFor="unit_price">
                                                      Invoice number / ID <span className="text-red-400 font-medium -ml-1">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                      <Input
                                                            className=""
                                                            type="text"
                                                            id="inv_number"
                                                            placeholder="Enter Invoice number"
                                                            {...field}
                                                            error={form.formState.errors?.inv_number?.message}
                                                      />

                                                </FormControl>
                                                <div role="button" className="absolute right-2 bg-gray-500 rounded p-2 bottom-[5px]">
                                                      <Download className="w-3 h-3 text-white" />
                                                </div>

                                                <FormMessage />
                                          </FormItem>
                                    )}
                              />

                              <FormField
                                    control={form.control}
                                    name="po_number"
                                    render={({ field }) => (
                                          <FormItem className="w-[330px]">
                                                <FormLabel htmlFor="unit_price">
                                                      PO number / ID <span className="text-red-400 font-medium -ml-1">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                      <Input
                                                            type="number"
                                                            id="po_number"
                                                            placeholder="Enter PO number"
                                                            {...field}
                                                            error={form.formState.errors?.po_number?.message}
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
                                          name="amount_paid"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="amount_paid"> Total Amount paid</FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  type="number"
                                                                  id="amount_paid"
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
                        {/*payment details */}
                        <Flex.col className="company space-y-6">
                              <Flex className="border-b py-2">
                                    <p className="capitalize font-bold text-xl text-gray-600 mt-4">Payment information</p>
                              </Flex>

                              {/*GL details */}

                              <div className="grid w-[60%] grid-cols-2 gap-4">
                                    <FormField
                                          control={form.control}
                                          name="gl_debit_account"
                                          render={({ field }) => (
                                                <FormItem id="gl_debit_account" className="">
                                                      <FormLabel htmlFor="state">
                                                            GL debit amount <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>

                                                      <FormControl>
                                                            <SelectForm
                                                                  onChange={field.onChange}
                                                                  value={field.value}
                                                                  placeholder={"Choose"}
                                                                  options={comapanies}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="gl_debit_desc"
                                          render={({ field }) => (
                                                <FormItem id="gl_debit_desc" className="">
                                                      <FormLabel htmlFor="state">
                                                            GL debit description <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>

                                                      <FormControl>
                                                            <SelectForm
                                                                  onChange={field.onChange}
                                                                  value={field.value}
                                                                  placeholder={"Choose"}
                                                                  options={comapanies}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="gl_credit_account"
                                          render={({ field }) => (
                                                <FormItem id="gl_credit_account" className="">
                                                      <FormLabel htmlFor="state">
                                                            GL credit amount <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>

                                                      <FormControl>
                                                            <SelectForm
                                                                  onChange={field.onChange}
                                                                  value={field.value}
                                                                  placeholder={"Choose"}
                                                                  options={comapanies}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="gl_credit_desc"
                                          render={({ field }) => (
                                                <FormItem id="gl_debit_desc" className="">
                                                      <FormLabel htmlFor="state">
                                                            GL credit description <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>

                                                      <FormControl>
                                                            <SelectForm
                                                                  onChange={field.onChange}
                                                                  value={field.value}
                                                                  placeholder={"Choose"}
                                                                  options={comapanies}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    {/*bank details */}
                                    <FormField
                                          control={form.control}
                                          name="debit_bank_name"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="debit_bank_name">
                                                            Debit bank name <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  className=""
                                                                  type="text"
                                                                  id="debit_bank_name"
                                                                  placeholder="Enter bank name"
                                                                  {...field}
                                                                  error={form.formState.errors?.debit_bank_name?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="debit_bank_account"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="debit_bank_account">
                                                            Debit bank account number <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  className=""
                                                                  type="text"
                                                                  id="debit_bank_account"
                                                                  placeholder="enter account number"
                                                                  {...field}
                                                                  error={form.formState.errors?.debit_bank_account?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="debit_bank_account_name"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="debit_bank_account_name">
                                                            Debit bank account name <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  className=""
                                                                  type="text"
                                                                  id="debit_bank_account"
                                                                  placeholder="Enter name on account number"
                                                                  {...field}
                                                                  error={form.formState.errors?.debit_bank_account_name?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="credit_bank_name"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="credit_bank_name">
                                                            Credit bank name <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  className=""
                                                                  type="text"
                                                                  id="credit_bank_name"
                                                                  placeholder="Enter bank name"
                                                                  {...field}
                                                                  error={form.formState.errors?.debit_bank_name?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="credit_bank_account"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="credit_bank_account">
                                                            Credit bank account number <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  className=""
                                                                  type="text"
                                                                  id="credit_bank_account"
                                                                  placeholder="enter account number"
                                                                  {...field}
                                                                  error={form.formState.errors?.debit_bank_account?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="credit_bank_account_name"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormLabel htmlFor="credit_bank_account_name">
                                                            Credit bank account name <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  className=""
                                                                  type="text"
                                                                  id="credit_bank_account"
                                                                  placeholder="Enter name on account number"
                                                                  {...field}
                                                                  error={form.formState.errors?.debit_bank_account_name?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="ref"
                                          render={({ field }) => (
                                                <FormItem className="col-span-2">
                                                      <FormLabel htmlFor="ref">
                                                            Payment Reference number <span className="text-red-400 font-medium -ml-1">*</span>
                                                      </FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  className=""
                                                                  type="text"
                                                                  id="ref"
                                                                  placeholder="Enter reference number"
                                                                  {...field}
                                                                  error={form.formState.errors?.ref?.message}
                                                            />
                                                      </FormControl>

                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />

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
                                    <Button>Create Invoice</Button>
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
