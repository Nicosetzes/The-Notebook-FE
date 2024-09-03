"use client";

import { MinusSign } from "@/components/icons/MinusSign";
import { PlusSign } from "@/components/icons/PlusSign";
import { AlertCircle } from "../icons/AlertCircle";
import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const ExplanatoryVariableContainer = ({ id, explanatory_variable }) => {
  const { register, setValue, watch } = useFormContext(); // useFormContext me permite conectar con el formulario del /step correspondiente

  const [isThirdRowOpen, setIsThirdRowOpen] = useState(false);
  const [isFourthRowOpen, setIsFourthRowOpen] = useState(false);
  const [isFifthRowOpen, setIsFifthRowOpen] = useState(false);

  const thirdLevel = watch(`explanatory_variable_level_${id}3`);
  const fourthLevel = watch(`explanatory_variable_level_${id}4`);
  const fifthLevel = watch(`explanatory_variable_level_${id}5`);

  useEffect(() => {
    if (thirdLevel) setIsThirdRowOpen(true);
    if (fourthLevel) setIsFourthRowOpen(true);
    if (fifthLevel) setIsFifthRowOpen(true);
  }, [thirdLevel, fourthLevel, fifthLevel]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>{`Variable: ${explanatory_variable}`}</div>
        <div>{"Presioná el botón para agregar un nuevo nivel (máx 5)"}</div>
      </div>
      <div className={styles.formRow}>
        <AlertCircle size={32} className={styles.alertCircle} />
        <input
          {...register(`explanatory_variable_level_${id}1`)}
          placeholder="Requerida"
        />
      </div>
      <div className={styles.formRow}>
        <AlertCircle size={32} className={styles.alertCircle} />
        <input
          {...register(`explanatory_variable_level_${id}2`)}
          placeholder="Requerida"
        />
      </div>
      <div className={styles.formRow}>
        {!isThirdRowOpen ? (
          <PlusSign
            size={32}
            className={styles.plusSign}
            onClick={() => setIsThirdRowOpen(!isThirdRowOpen)}
          />
        ) : (
          <>
            <MinusSign
              size={32}
              className={styles.minusSign}
              onClick={() => {
                setIsThirdRowOpen(!isThirdRowOpen);
                setValue(`explanatory_variable_level_${id}3`, null);
              }}
            />
            <input
              {...register(`explanatory_variable_level_${id}3`)}
              placeholder="Ingrese una categoría"
            />
          </>
        )}
      </div>
      {isThirdRowOpen && (
        <div className={styles.formRow}>
          {!isFourthRowOpen ? (
            <PlusSign
              size={32}
              className={styles.plusSign}
              onClick={() => setIsFourthRowOpen(!isFourthRowOpen)}
            />
          ) : (
            <>
              <MinusSign
                size={32}
                className={styles.minusSign}
                onClick={() => {
                  setIsFourthRowOpen(!isFourthRowOpen);
                  setValue(`explanatory_variable_level_${id}4`, null);
                }}
              />
              <input
                {...register(`explanatory_variable_level_${id}4`)}
                placeholder="Ingrese una categoría"
              />
            </>
          )}
        </div>
      )}
      {isFourthRowOpen && (
        <div className={styles.formRow}>
          {!isFifthRowOpen ? (
            <PlusSign
              size={32}
              className={styles.plusSign}
              onClick={() => setIsFifthRowOpen(!isFifthRowOpen)}
            />
          ) : (
            <>
              <MinusSign
                size={32}
                className={styles.minusSign}
                onClick={() => {
                  setIsFifthRowOpen(!isFifthRowOpen);
                  setValue(`explanatory_variable_level_${id}5`, null);
                }}
              />
              <input
                {...register(`explanatory_variable_level_${id}5`)}
                placeholder="Ingrese una categoría"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ExplanatoryVariableContainer;
