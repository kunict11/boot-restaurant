package com.example.bootrestaurant.Helpers;

import java.beans.PropertyEditorSupport;

public class EnumConverter<T extends Enum<T>> extends PropertyEditorSupport {
    private final Class<T> paramType;

    public EnumConverter(Class<T> paramType) {
        super();
        this.paramType = paramType;
    }

    @Override
    public void setAsText(String text) throws IllegalArgumentException {
        setValue(T.valueOf(paramType, text.toUpperCase()));
    }
}
