import React, { useState, useEffect, useMemo, useCallback } from 'react';

const ProfileStatus = ({ status: propStatus, updateStatus }) => {
    const [editMode, setEditMode] = useState(false); //деструктуризация из useState массива берем значения и присваиваем их editMode и setEditMode
    const [status, setStatus] = useState(propStatus); // создаем второй локальный стейт, дробим на части

    // Используем useCallback для сохранения стабильной ссылки на функцию
    const activateEditMode = useCallback(() => {
        setEditMode(true);
    }, []);

    // Используем useCallback для сохранения стабильной ссылки на функцию
    const deactivateEditMode = useCallback(() => {
        setEditMode(false);
        updateStatus(status);
    }, [updateStatus, status]);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
        setStatus(propStatus); //передаем то что нужно обновить в локал стейт
    }, [propStatus]); // условие при котором производим обновление(обновлены пропсы)

    // Мемоизация компоненты для предотвращения ненужных рендеров
    const memoizedComponent = useMemo(() => (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || "------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </>
    ), [editMode, status, activateEditMode, deactivateEditMode]);

    return memoizedComponent;
};

export default ProfileStatus;
